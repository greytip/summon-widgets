const modalBackgroundColor = `rgba(0,0,0,0.4);`; /* Black w/ opacity */
const contentBackgroundColor = `#fefefe`;
const borderColor = `#888`;
const borderLightColor = `rgba(8, 8, 8, 0.3)`;
const contentBorder = `1px solid ${borderColor};`;
const headerBorder = `1px solid ${borderLightColor}`;
const modalShadow = ` 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)`;

// Color which will be used as background for header and footer of modal.
const themeColor = `#5cb85c`;

const maxModalWidth = '800px';

const progressColor = '#f1f1f1';
const progressBarColor = '#2196F3';
const progressBarHeight = '24px';

const styles = `

/* Center aligns text */

/* The Modal (background) */
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: ${modalBackgroundColor}
}

/* Modal Content */
.modal-content {
    position: relative;
    background-color: ${contentBackgroundColor};
    margin: auto;
    padding: 0;
    border: ${contentBorder};
    border-radius: 5px;
    width: 80%;
    max-width: ${maxModalWidth};
    box-shadow: ${modalShadow};
    -webkit-animation-name: animateTop;
    -webkit-animation-duration: 0.4s;
    animation-name: animateTop;
    animation-duration: 0.4s
}

/* Add Animation */
@-webkit-keyframes animateTop {
    from {
        top:-300px;
        opacity:0;
    } 
    to {
        top:0;
        opacity:1
    }
}

@keyframes animateTop {
    from {
        top:-300px; 
        opacity:0
    }
    to {
        top:0;
        opacity:1
    }
}

/* The Close Button */
.close {
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

.modal-open {
    display: block;
}

.modal-header {
    padding: 2px 16px;
    border-bottom: ${headerBorder};
}

.modal-body {
    padding: 2px 16px;
}

.modal-footer {
    padding: 2px 16px;
}

/* Progress bar related styles */
.progress {
    background-color: ${progressColor};
    width: 100%;
    margin: 20px 0;
}

.progress-bar {
    width: 0;
    height: ${progressBarHeight};
    background-color: ${progressBarColor};
    transition: width 0.5s ease-in-out;
}
`;

export default styles;
