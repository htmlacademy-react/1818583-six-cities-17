import {AddCommentForm} from '../add-comment-form/add-comment-form.tsx';
import {Review} from '../review/review.tsx';
import {CommentType} from '../../api/types.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {selectAuthStatus} from '../../store/selectors.ts';
import {AuthStatus} from '../../api/const.ts';

type Props = {
  list: CommentType[];
  onAddComment: () => void;
}

function ReviewsList({ list, onAddComment }: Props) {
  const authStatus = useAppSelector(selectAuthStatus);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{list.length}</span></h2>
      <ul className="reviews__list">
        {
          list.map((review) => <Review key={review.id} data={review}/>)
        }
      </ul>
      {
        authStatus === AuthStatus.AUTH && <AddCommentForm onAddComment={onAddComment}/>
      }
    </section>
  );
}

export {ReviewsList};
