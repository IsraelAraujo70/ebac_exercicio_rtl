import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';
import PostComments from '..';

const mockComment = [{
    id: 1,
    comment: 'Comentário 1'
}, {
    id: 2,
    comment: 'Comentário 2' 
}]

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Deve adicionar dois novos comentários', () => {
        render(<PostComments/>)
        const textarea = screen.getByTestId('textarea-add-comment');
        const btn = screen.getByTestId('btn-add-comment');
        mockComment.forEach(comment => {
            fireEvent.change(textarea, { target: { value: comment.comment } });
            fireEvent.click(btn);
        })
        expect(screen.getByTestId('post-comments')).toHaveTextContent('Comentário 1Comentário 2');
    })
});