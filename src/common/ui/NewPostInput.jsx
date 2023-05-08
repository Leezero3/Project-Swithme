import React, { useState } from 'react'
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/esm/locale';

function NewPostInput({label, value, size, onChange, type, ...rest}) {
  const [startDate, setStartDate] = useState(new Date());
  const [memberCounter, setMemberCounter] = useState(0);

  const onIncrease = () => {
    setMemberCounter(memberCounter+1);
  };
  const onDecrease = () =>{
    if(memberCounter > 0){
      setMemberCounter(memberCounter-1);
    }
  };

  if(type === "textarea"){
    return(
      <InputWrapper size={size}>
        <InputLabel>{label}</InputLabel>
        <TextArea value={value} size={size} onChange={onChange} {...rest}/>
      </InputWrapper>
    );
  } else if(type === "date") {
    return (
      <InputWrapper size={size}>
        <InputLabel>{label}</InputLabel>
        <StDatePicker 
          type="date" 
          locale={ko} 
          dateFormat="yyyy년 MM월 dd일"
          minDate={new Date()}
          selected={startDate} 
          onChange={(date) => setStartDate(date)} 
          />
      </InputWrapper>
    );
  } else if(type === "counter") {
    return (
      <InputWrapper size={size}>
        <InputLabel>{label}</InputLabel>
        <Input value={memberCounter} size={size} {...rest}/>
        <BtnWrap>
          <button type='button' onClick={onDecrease}>‒</button>
          <button type='button' onClick={onIncrease}>+</button>
        </BtnWrap>
      </InputWrapper>
    )
  } else {
    return (
      <InputWrapper size={size}>
        <InputLabel>{label}</InputLabel>
        <Input value={value} size={size} onChange={onChange} {...rest}/>
      </InputWrapper>
    )
  }
  
}

export default NewPostInput;

const InputSize = {
  half:{
    wrapperSize:"50%",
    height:"50px"
  },
  full:{
    wrapperSize:"100%",
    height:"50px"
  },
  textarea:{
    wrapperSize:"100%",
    height:"200px"
  }
};

const InputWrapper = styled.div`
  position:relative;
  overflow:hidden;
  width:${(props) => InputSize[props.size].wrapperSize};
  height:${(props) => InputSize[props.size].height};
  display:inline-flex;
  margin-bottom:15px;

  & .react-datepicker-wrapper{
    width:calc(100% - 120px);
  }

  & .react-datepicker__input-container{
    width:100%;
  }
`

const InputLabel = styled.label`
  display:inline-block;
  width:100px;
  text-align:center;
  font-size:20px;
  font-weight:500;
  padding-top:10px;
`
const TextArea = styled.textarea`
    display:inline-block;
    width:calc(100% - 120px);
    height:200px;
    border:1px solid #ccc;
    border-radius:15px;
    padding:10px 20px;
    box-sizing:border-box;
    resize: none;
`
const Input = styled.input`
    display:inline-block;
    width:calc(100% - 120px);
    height:45px;
    border:1px solid #aaa;
    border-radius:10px;
    padding:5px 20px;
    box-sizing:border-box;
`
const StDatePicker = styled(DatePicker)`
    display:inline-block;
    width:100% !important;
    height:45px;
    border:1px solid #aaa;
    border-radius:10px;
    padding:5px 20px;
    box-sizing:border-box;
`
const BtnWrap = styled.div`
  position:absolute;
  top:0px;
  left:100px;
  width:calc(100% - 120px);
  display:flex;
  justify-content:space-between;
  gap:10px;
  & > button{
    background-color:#ccc;
    width:70px;
    height:45px;
    border:none;
    border-radius:0 10px 10px 0;
    font-size:25px;
  }
  & > button:first-child{
    border-radius:10px 0 0 10px;
    line-height:0.1;
  }
`