import React,{useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    OnCurrencyChange,
    currencyoptions =[],
    selectCurrency="usd",
    amountDisabled=false,// user amount dena chahta h ya ni
    currencyDisabled=false,
    className = "",

}) {
    
    const amountInputId = useId()  // we'll get a unique value
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5 text-black" 
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1  cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=> OnCurrencyChange && OnCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                    
                >
                    
                       {currencyoptions.map((currency)=>(
                        <option key={currency} value={currency}>{currency}</option>
                       ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;

// react k andar performance lane k liye we should always use key in loops