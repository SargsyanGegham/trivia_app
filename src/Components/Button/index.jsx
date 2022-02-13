import { S } from './styles';

export default function Button ({ children, type, ...rest }) {
    return <S.MyButton {...rest} type={type} variant="contained" color="success">{children}</S.MyButton>
};