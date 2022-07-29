import { formatTime, formatCurrencyResult } from '../../helpers'
import { RingLoader } from 'react-spinners'
import '../Results/Results.css'

const Results = ({ data, isDisabled, isLoading }) => {
  const { result, query, info } = data
  return (
    <div className='convert-results-container'>
      {result ? (
        <div className='rate-result-container'>
          <p className='rate-result'>
            {formatCurrencyResult(result)} ${query.to}
          </p>
          <p className='rate'>
            1 {`${query.from} = ${formatCurrencyResult(info.rate)} ${query.to}`}
          </p>
          <small>
            Mid-market exchange rate at {formatTime(info.timestamp)}
          </small>
        </div>
      ) : (
        <div>
          <RingLoader color={'#19EF88'} loading={isLoading} size={70} />
        </div>
      )}
      <button
        className='convert-button'
        type='submit'
        form='form'
        disabled={isDisabled}
      >
        CONVERT
      </button>
    </div>
  )
}

export default Results
