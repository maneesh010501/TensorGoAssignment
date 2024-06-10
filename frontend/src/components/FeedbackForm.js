import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
    const [category, setCategory] = useState('Product Features');
    const [rating, setRating] = useState(0);
    const [comments, setComments] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/feedback/submit', { category, rating, comments });
            alert('Feedback submitted successfully.');
        } catch (err) {
            alert('Error submitting feedback.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Category:
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Product Features">Product Features</option>
                    <option value="Product Pricing">Product Pricing</option>
                    <option value="Product Usability">Product Usability</option>
                </select>
            </label>
            <label>
                Rating:
                <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
            </label>
            <label>
                Comments:
                <textarea value={comments} onChange={(e) => setComments(e.target.value)}></textarea>
            </label>
            <button type="submit">Submit Feedback</button>
        </form>
    );
};

export default FeedbackForm;
