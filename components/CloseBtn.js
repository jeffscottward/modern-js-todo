let color_red = '#d65b25';

const CloseBtn = props => (
  <button onClick={props.clickAction} className="close">
    X
    <style jsx>{`
      .close {
        position: absolute;
        right: 0;
        top: 0;
        padding: 12px 16px 12px 16px;
        cursor: pointer;
        background: none;
        border: none;
        color: transparent;
        height: 100%;
        outline: none;
        cursor: pointer;
      }
      .close:hover {
        background-color: ${color_red};
        color: white;
      }
    `}</style>
  </button>
)

export default CloseBtn
