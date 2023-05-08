import CommonButton from 'common/ui/common-button';
import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import styled from 'styled-components';
import study from '../../assets/board-study-book.png';
import project from '../../assets/board-project-highfive.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/esm/locale';
import { addNewGroupPosting } from 'api/todo';

function AddNewGroup() {
    const queryClient = useQueryClient();
    // DatePicker: date 저장
    const [startDate, setStartDate] = useState(new Date());

    // Member : MemberNum counter
    const [memberCounter, setMemberCounter] = useState(0);
    // 증가
    const onIncrease = () => {
        setMemberCounter(memberCounter+1);
    };
    // 감소
    const onDecrease = () =>{
        if(memberCounter > 0){
        setMemberCounter(memberCounter-1);
        }
    };

    const mutation = useMutation(addNewGroupPosting,{
       onSuccess: () => {
        console.log('성공')
       } 
    });

    const [newGroup, setNewGroup] = useState({
        type:"",
        title:"",
        date:"",
        totalMember:"",
        contents:""
    });

    const addInputHandler = (e) =>{
        setNewGroup({...newGroup,[e.target.name]:e.target.value});
    };

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        const newPost = {
            type:newGroup.type,
            title:newGroup.title,
            date:startDate.toLocaleDateString(),
            totalMember:memberCounter,
            contnets:newGroup.contents
        };
        console.log(newPost);
        mutation.mutate(newPost);

    };

  return (
    <>
        <Form onSubmit={onSubmitHandler}>
            <RadioWrapper>
                <InputRadio type="radio" name='type' id="project" value="project" onChange={addInputHandler} />
                <label htmlFor='project' value="project">
                    <img src={project} alt="프로젝트"></img>
                    <span>프로젝트</span>
                </label>
                
                <InputRadio type="radio" name='type' id="study" value="study" onChange={addInputHandler}/>
                <label htmlFor='study' value="study">
                    <img src={study} alt="스터디"></img>
                    <span>스터디</span>
                </label>
            </RadioWrapper>
            <InputWrapper size="full">
                <InputLabel>모집 제목</InputLabel>
                <Input size="full" type="text" name="title" value={newGroup.title} onChange={addInputHandler} />
            </InputWrapper>

            <InputWrapper size="half">
                <InputLabel>모집 마감</InputLabel>
                <StDatePicker 
                selected={startDate} 
                onChange={(date) => setStartDate(date)} 
                locale={ko} 
                dateFormat="yyyy년 MM월 dd일"
                minDate={new Date()}
                />
            </InputWrapper>

            <InputWrapper size="half">
                <InputLabel>모집 인원</InputLabel>
                <Input value={memberCounter} size="half" style={{textAlign:"center"}} name="totalMember" onChange={addInputHandler}/>
                <BtnWrap>
                <button type='button' onClick={onDecrease}>‒</button>
                <button type='button' onClick={onIncrease}>+</button>
                </BtnWrap>
            </InputWrapper>

            <InputWrapper size="textarea">
                <InputLabel>모집내용</InputLabel>
                <TextArea defaultvalue={newGroup.contents} name="contents" onChange={addInputHandler}></TextArea>
            </InputWrapper>
            <CommonButton size='large' style={{margin:"0 auto"}}>모집 글 등록하기</CommonButton>
        </Form>
    </>
  )
};

export default AddNewGroup;
const Form = styled.form`
  text-align:center;
`
const RadioWrapper = styled.div`
    display:flex;
    justify-content:center;
    gap:20px;
    margin:80px 0;
`
const InputRadio = styled.input`
    position:absolute;
    display:none;

    & + label{
        position:relative;
        display:inline-block;
        width:150px;
        height:150px;
        background-color:#eee;
        border-radius:15px;
        cursor:pointer;
        font-size:20px;
        font-weight:500;
    }
    & + label>img{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
        width:100px;
        height:100px;
    }
    & + label>span{
        position:absolute;
        top: 160px;
        left:50%;
        transform:translateX(-50%);
    }
    &:checked + label{
        display:inline-block;
        width:150px;
        height:150px;
        background-color:#FFD789;
    };
`
// Input Style
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
    /* position:absolute;
    top:-20px;
    z-index:10; */
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

