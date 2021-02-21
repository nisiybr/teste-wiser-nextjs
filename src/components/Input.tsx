import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiX } from 'react-icons/fi';
import { useField } from '@unform/core';
import { Container, Error } from '../styles/components/Input';

interface StyleProps {
  marginTop?: number;
}

/**
 * Estende a interface para todos os atributos que input pode receber
 * o atributo name eh reparametrizado, sendo obrigatorio
 */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: StyleProps;
  icon?: React.ComponentType<IconBaseProps>;
  /**
   * Eh importado o IconBaseProps para dizer quais atributos sao possiveis no Icon
   */
}

const Input: React.FC<InputProps> = ({
  name,
  containerStyle = {},
  icon: Icon,
  ...rest
}) => {
  /**
   * Com esse inputRef, eh possivel manipular o Ref
   */
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  /**
   * Aqui eh utilizado o Unform para pegar as props de cada field
   */

  const { fieldName, defaultValue, error, registerField } = useField(name);

  /**
   * Assim que o componente for apresentado em tela, sera feito o register field, necessario para o unform
   * pegar as informacoes
   * Ref eh para acessar um elemento de forma direta, sem precisar armazenar em lugar nenhum
   * Deve ser importado o UseRef para isso
   * Default Value pode ser acessado passando um objeto no initial data do form
   */
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container
      style={containerStyle}
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
      data-testid="input-container"
    >
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      {error && (
        <Error title={error}>
          <FiX color="#FF377F" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
