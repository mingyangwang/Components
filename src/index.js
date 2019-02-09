import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<div>
					<h4>Warning!</h4>
					Are you sure you want to do this?
				</div>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					author="Sam"
					timeAgo="Yesterday 12:00PM"
					commentContent="Good content!"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					author="haha"
					timeAgo="Yesterday 11:00PM"
					commentContent="So great!"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					author="Liang"
					timeAgo="Yesterday 10:00PM"
					commentContent="I like it!"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
