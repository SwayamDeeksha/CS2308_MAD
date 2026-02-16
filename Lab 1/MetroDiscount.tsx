<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Metro Ticket Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f5f5f5;
        }

        .container {
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        h2 {
            text-align: center;
            margin-bottom: 25px;
        }

        .form-group {
            margin-bottom: 15px;
        }

        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }

        input[type="number"],
        select {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-sizing: border-box;
        }

        button {
            width: 100%;
            padding: 12px;
            font-size: 16px;
            background: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
        }

        button:hover {
            background: #45a049;
        }

        .result {
            margin-top: 20px;
            padding: 15px;
            background: #e8f5e9;
            border-radius: 5px;
            display: none;
        }

        .result.show {
            display: block;
        }

        .price-row {
            display: flex;
            justify-content: space-between;
            margin: 8px 0;
            padding: 8px;
            background: white;
            border-radius: 3px;
        }

        .final-price {
            background: #4CAF50;
            color: white;
            font-weight: bold;
            font-size: 18px;
        }

        .discount-note {
            margin-top: 10px;
            padding: 10px;
            background: #fff3e0;
            border-radius: 3px;
            font-size: 14px;
            color: #e65100;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Metro Ticket</h2>

        <div class="form-group">
            <label>Base Price (₹)</label>
            <input type="number" id="basePrice" value="50" min="1">
        </div>

        <div class="form-group">
            <label>Age</label>
            <input type="number" id="age" placeholder="Enter age" min="0">
        </div>

        <div class="form-group">
            <label>Gender</label>
            <select id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>

        <button onclick="calculateTicket()">Calculate</button>

        <div class="result" id="result">
            <div class="price-row">
                <span>Base Price:</span>
                <span id="basePriceDisplay">₹0</span>
            </div>
            <div class="price-row">
                <span>Discount:</span>
                <span id="discountDisplay">0%</span>
            </div>
            <div class="price-row final-price">
                <span>Final Price:</span>
                <span id="finalPriceDisplay">₹0</span>
            </div>
            <div class="discount-note" id="discountNote"></div>
        </div>
    </div>

    <script>
        function calculateTicket() {
            const basePrice = parseFloat(document.getElementById('basePrice').value);
            const age = parseInt(document.getElementById('age').value);
            const gender = document.getElementById('gender').value;

            if (isNaN(basePrice) || basePrice <= 0) {
                alert('Please enter a valid base price');
                return;
            }

            if (isNaN(age) || age < 0) {
                alert('Please enter a valid age');
                return;
            }

            let discounts = [];

            if (gender === 'female') {
                discounts.push({ type: 'Female', percent: 50 });
            }

            if (age < 5) {
                discounts.push({ type: 'Under 5 (Free)', percent: 100 });
            } else if (age <= 8) {
                discounts.push({ type: 'Kids 5-8', percent: 50 });
            } else if (age > 65) {
                discounts.push({ type: 'Senior 65+', percent: 70 });
            }

            let maxDiscount = 0;
            let appliedDiscount = 'No discount';

            if (discounts.length > 0) {
                maxDiscount = Math.max(...discounts.map(d => d.percent));
                const applied = discounts.find(d => d.percent === maxDiscount);
                appliedDiscount = applied.type;
            }

            const finalPrice = basePrice - (basePrice * maxDiscount) / 100;

            document.getElementById('basePriceDisplay').textContent = `₹${basePrice.toFixed(2)}`;
            document.getElementById('discountDisplay').textContent = `${maxDiscount}%`;
            document.getElementById('finalPriceDisplay').textContent = `₹${finalPrice.toFixed(2)}`;

            const note = document.getElementById('discountNote');
            if (discounts.length > 1) {
                note.textContent = `Applied: ${appliedDiscount} (${maxDiscount}% off - max discount)`;
            } else if (discounts.length === 1) {
                note.textContent = `Applied: ${appliedDiscount} (${maxDiscount}% off)`;
            } else {
                note.textContent = 'No discount applied';
            }

            document.getElementById('result').classList.add('show');
        }
    </script>
</body>
</html>
