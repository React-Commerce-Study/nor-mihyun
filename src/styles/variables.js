import { css } from "styled-components";

const variables = {
  flex: (direction = "row", justify = "center", align = "center") => `
		display: flex;
		flex-direction: ${direction};
		justify-content: ${justify};
		align-items: ${align};
	`,

  absoluteCenter: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,

  pseudoBackground: (url = "", imageSize = "contain") => `
		content: "";
		display: block;
		background: url(${url}) no-repeat center / ${imageSize};
	`,
};

export default variables;
