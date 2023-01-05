import React from "react";
import { Section } from "./components/Section/Section";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "./components/Statistics/Statistics";
import { Notification } from "./components/Notification/Notification";
class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleFeedback = (e) => {
    switch (e.target.textContent) {
      case "Good":
        this.setState((prev) => ({ good: prev.good + 1 }));
        break;
      case "Neutral":
        this.setState((prev) => ({ neutral: prev.neutral + 1 }));
        break;
      case "Bad":
        this.setState((prev) => ({ bad: prev.bad + 1 }));
        break;
      default:
        break;
    }
  };
  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;
  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);
  hasFeedback = () => (this.countTotalFeedback() ? true : false);
  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["Good", "Neutral", "Bad"]}
          onLeaveFeedback={this.handleFeedback}
        />
        <h2>Statistics</h2>
        {this.hasFeedback() && (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
        {!this.hasFeedback() && <Notification message="There is no feedback" />}
      </Section>
    );
  }
}

export default App;
