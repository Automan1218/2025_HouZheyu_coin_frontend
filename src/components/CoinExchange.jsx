import React, { useState } from "react";

const CoinExchange = () => {
    const [targetAmount, setTargetAmount] = useState(""); // Target amount
    const [coinValues, setCoinValues] = useState(""); // Coin denominations
    const [result, setResult] = useState(null); // API response result
    const [error, setError] = useState(null); // Error message

    const handleCalculate = async () => {
        // Input validation
        if (!targetAmount || !coinValues) {
            setError("Please enter both target amount and coin values!");
            return;
        }

        try {
            setError(null);
            setResult(null);

            // // Parse coin values
            // const coins = coinValues
            //     .split(",")
            //     .map((value) => parseFloat(value.trim()))
            //     .filter((value) => !isNaN(value)); // Filter invalid input
            const coins = coinValues.split(",").map(value => value.trim());

            if (coins.length === 0) {
                setError("Invalid coin values. Please enter valid numbers separated by commas!");
                return;
            }

            // Build request body
            const requestBody = {
                targetAmount: parseFloat(targetAmount),
                value: coins,
            };

            // Send POST request to backend
            const response = await fetch("http://localhost:8080/api/min-coins", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });

            // Parse response
            const data = await response.json();

            if (response.ok) {
                setResult(data.coins);
            } else {
                setError(data.error || "Calculation failed. Please check your input!");
            }
        } catch (err) {
            console.error(err); // Log error for debugging
            setError("Failed to connect to the backend. Please ensure the server is running!");
        }
    };

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
            <h1>Coin Exchange Calculator</h1>

            <div style={{ marginBottom: "20px" }}>
                <label>Target Amount:</label>
                <input
                    type="number"
                    value={targetAmount}
                    onChange={(e) => setTargetAmount(e.target.value)}
                    placeholder="Enter the target amount"
                />
            </div>

            <div style={{ marginBottom: "20px" }}>
                <label>Coin Values (comma-separated):</label>
                <input
                    type="text"
                    value={coinValues}
                    onChange={(e) => setCoinValues(e.target.value)}
                    placeholder="e.g., 0.01, 0.05, 0.1, 0.5, 1, 2, 5, 10"
                />
            </div>

            <button onClick={handleCalculate}>Calculate</button>

            {/* Display result */}
            {result && (
                <div style={{ marginTop: "20px", color: "green" }}>
                    <h3>Calculation Result:</h3>
                    <p>{result.join(", ")}</p>
                </div>
            )}

            {/* Display error */}
            {error && (
                <div style={{ marginTop: "20px", color: "red" }}>
                    <h3>Error:</h3>
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
};

export default CoinExchange;
