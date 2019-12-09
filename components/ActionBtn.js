let color_red = '#d65b25';
let color_green = 'green';

const ActionBtn = props => {
  if (props.actionType !== 'close' &&
      props.actionType !== 'complete') {
    throw Error('actionType prop must be close or complete')
  }
  return (
    <button onClick={props.clickAction} className={props.actionType}>
      {props.actionType === 'close' ? 'X' : '✓'}
    <style jsx>{`
      button {
        position: absolute;
        ${props.actionType === 'close' ? 'right: 0;' : 'left: 0;'}
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
      .complete:hover {
        background-color: ${color_green};
        color: white;
      }
    `}</style>
    </button>
  )
}

export default ActionBtn
