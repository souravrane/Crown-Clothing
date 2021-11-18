import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

import "./App.css";

const TopicList = () => {
  return (
    <div>
      <h1>Topic List page</h1>
    </div>
  );
};

const TopicDetail = () => {
  return (
    <div>
      <h1>Topic Detail page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/topics" component={TopicList} />
      <Route path="/topics/:topicId" component={TopicDetail} />
    </div>
  );
}

export default App;
