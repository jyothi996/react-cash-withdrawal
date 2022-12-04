import './index.css'

const DenominationItem = props => {
  const {denominations, deductedValue} = props
  const {value} = denominations

  const onClickButton = () => {
    deductedValue(value)
  }

  return (
    <li className="button-list">
      <button type="button" onClick={onClickButton} className="value-button">
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
