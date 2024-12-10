import { render, screen } from '@testing-library/react';

import Post from "..";

describe('Teste para o componente Post', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<Post children="olha só que legal minha miniatura do Batmóvel." imageUrl="https://th.bing.com/th/id/OIP.7JGrZBLCBlCcdAJmM8-1lAHaEK?rs=1&pid=ImgDetMain" />);
        expect(screen.getByText('olha só que legal minha miniatura do Batmóvel.')).toBeInTheDocument();
    });
});