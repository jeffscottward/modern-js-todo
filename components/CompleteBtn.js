let color_green = 'green';

const CompleteBtn = props => (
  <button onClick={props.clickAction} className="complete">
    ✓
    <style jsx>{`
      .complete {
        position: absolute;
        left: 0;
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
      .complete:hover {
        background-color: ${color_green};
        color: white;
      }
    `}</style>
  </button>
)

export default CompleteBtn
