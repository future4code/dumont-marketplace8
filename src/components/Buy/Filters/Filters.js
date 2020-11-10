import React from 'react';
import styled from 'styled-components';

const FiltersContainer = styled.div`
    padding: 16px;
`

const InputContainer = styled.div`
    margin: 12px;
`

const ParTag = styled.p`
    display: block;
`

class Filters extends React.Component {
    render() {
        return (
            <FiltersContainer>
                <h2>Filtros</h2>
                    <InputContainer>
                        <ParTag><strong>Valor mínimo:</strong></ParTag>
                        <input 
                            type="number" 
                            value={this.props.minFilter}
                            onChange={this.props.onChangeMinFilter}
                        />
                    </InputContainer>

                    <InputContainer>
                        <ParTag><strong>Valor máximo:</strong></ParTag>
                        <input 
                            type="number"
                            value={this.props.maxFilter} 
                            onChange={this.props.onChangeMaxFilter}
                        />
                    </InputContainer>

                    <InputContainer>
                        <ParTag><strong>Nome:</strong></ParTag>
                        <input 
                            type="text" 
                            value={this.props.nameFilter}
                            onChange={this.props.onChangeNameFilter}
                        />
                    </InputContainer>

                    <InputContainer>
                        <ParTag><strong>Categoria:</strong></ParTag>
                        <input 
                            type="text"
                            value={this.props.categoryFilter}
                            onChange={this.props.onChangeCategoryFilter}
                        />   
                    </InputContainer>
                
            </FiltersContainer>
        )
    }
}

export default Filters