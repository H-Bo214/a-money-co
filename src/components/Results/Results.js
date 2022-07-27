import { formatTime, formatResult } from '../../helpers'
import { RingLoader } from 'react-spinners'
import '../Results/Results.css'

const Results = ({ data, isDisabled, isLoading }) => {
  const { result, query, info } = data
  return (
    <div className='convert-results-container'>
      {result ? (
        <div>
          <p className='rate-result'>
            {formatResult(result)} ${query.to}
          </p>
          <p className='rate'>
            1 {`${query.from} = ${formatResult(info.rate)} ${query.to}`}
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
