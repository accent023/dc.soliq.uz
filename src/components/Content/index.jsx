import "./Content.css";

const Content = ({ children, ...props }) => (
	<div className="content" {...props}>
		{children}
	</div>
);

export default Content;
