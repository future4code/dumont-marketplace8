import React from 'react';
import Button from '@material-ui/core/Button';
import styled from "styled-components"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const Cabecalho =styled.div`
    background-color:#fffcef;
    padding: 1em;
    display:flex;
    justify-content:space-between;
    align-items: center;
    
`
const ImgLogo =styled.img`
   width:15em;
`

class MenuSuperior extends React.Component {
    state={
        value:"",
        
    }
   
    handleChange = (event) => {
        this.setState({value:event.target.value});
    };

        render() {
         return(
            
            <Cabecalho>
                <ImgLogo src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3e415fe9-43f0-4dc4-b950-e2818853cef1%2F2.png?table=block&id=ebade8dc-9faa-452f-9db2-31fc11607482&width=2730&userId=&cache=v2"/>
                
                <Button variant="contained" color="secondary">
                    Ei, Eu também quero vender!
                </Button>
                    
                <FormControl component="fieldset">
                    <FormLabel component="legend">Ordenar por:</FormLabel>
                     <RadioGroup aria-label="Ordenar" name="gender1" value={this.state.value} onChange={this.handleChange}>
                        <FormControlLabel value="name" control={<Radio />} label="Nome" />
                        <FormControlLabel value="price" control={<Radio />} label="Preço" />
                        <FormControlLabel value="category" control={<Radio />} label="Categoria" />
                     </RadioGroup>
                </FormControl>
            </Cabecalho>
        )
    }
}

export default MenuSuperior