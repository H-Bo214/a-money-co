const customStyles = {
  option: (provided) => ({
    ...provided,
    borderBottom: '1px solid #2E84FF',
    padding: '12px 12px',
  }),
  control: () => ({
    display: 'flex',
    width: '20rem',
    dropShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    backgroundColor: '#FFF',
    borderRadius: '25px',
    height: '4.3rem',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#51707b',
    // height: '30rem',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: '#FFF',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = 'opacity 300ms'
    return { ...provided, opacity, transition }
  },
}

export default customStyles
