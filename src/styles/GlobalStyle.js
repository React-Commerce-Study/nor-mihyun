import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
	${reset}
	@font-face {
	font-family: 'SpoqaHanSansNeo';
	src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
	font-weight: normal;
	font-style: normal;
	}
	a{
		text-decoration: none;
		color: inherit;
	}
	*{
		box-sizing: border-box;
	}
	html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
	a, dl, dt, dd, ol, ul, li, form, label, table{
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 10px;
		vertical-align: baseline;
	}
	body{
		font-family: 'SpoqaHanSansNeo';
	}
	ol, ul{
		list-style: none;
	}
	button {
		border: 0;
		background: transparent;
		cursor: pointer;
	}
	img{
		vertical-align: middle;
	}
	.a11y-hidden {
		clip: rect(1px, 1px, 1px, 1px);
		clip-path: inset(50%);
		width: 1px;
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
	}
`;

export default GlobalStyle;
