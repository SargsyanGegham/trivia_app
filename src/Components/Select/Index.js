import { S } from "./styles";

export default function Select({options, renderOption, ...rest}) {
  return (
    <>
      <S.GlobalStyles />
      <S.Select {...rest}>
        {options.map(option => 
          <S.Option key={option[renderOption.key]} value={option}>
            {option[renderOption.label]}
          </S.Option>
        )}
      </S.Select>
    </>
  )
};