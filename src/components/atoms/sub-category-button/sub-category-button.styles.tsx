import styled from 'styled-components/native';

export const TagText = styled.Text<{ selected: boolean }>`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: ${({ selected }) => selected ? "white" : "black"};
`;

export const TagContainer = styled.TouchableOpacity<{ selected: boolean }>`
    background-color: ${({ selected }) => selected ? "#7EA1BC" : "#F6F6F6"};
    padding: 0px 15px;
    justify-content: center;
    border-radius: 12px;
    height: 60px;
`