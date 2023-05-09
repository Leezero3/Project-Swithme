import styled from "styled-components";

function JoinLoginInput(props) {
    const { label, type, value, name, onChange } = props;
    return (
        <InputWrapper>
            <InputLabel>{label}</InputLabel>
            <InputField type={type} value={value} name={name} onChange={onChange} />
        </InputWrapper>
    );
}

export default JoinLoginInput;

const InputLabel = styled.label`
    font-size: 16px;
    margin-bottom: 5px;
`;

const InputField = styled.input`
    width: 400px;
    height: 28px;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    font-size: 15px;
    padding-left: 5px;
    margin-bottom: 5px;
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
`;
