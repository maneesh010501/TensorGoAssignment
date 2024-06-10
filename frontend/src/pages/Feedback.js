import React from 'react';
import FeedbackForm from '../components/FeedbackForm';
import FeedbackList from '../components/FeedbackList';

const Feedback = () => {
    return (
        <div>
            <h1>Submit Your Feedback</h1>
            <FeedbackForm />
            <FeedbackList category="Product Features" />
            <FeedbackList category="Product Pricing" />
            <FeedbackList category="Product Usability" />
        </div>
    );
};

export default Feedback;
