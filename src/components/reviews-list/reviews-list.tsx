import {AddCommentForm} from '../add-comment-form/add-comment-form.tsx';
import {Review} from '../../shared/review/review.tsx';
import {CommentType} from '../../api/types.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {AuthStatus} from '../../api/const.ts';
import {selectAuthStatus} from '../../store/user-slice/selectors.ts';

type Props = {
  list: CommentType[];
  totalReviewsCount: number;
  onAddComment: () => void;
}

function ReviewsList({ list, onAddComment, totalReviewsCount }: Props) {
  const authStatus = useAppSelector(selectAuthStatus);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{totalReviewsCount}</span></h2>
      <ul className="reviews__list">
        {
          list.map((review) => <Review key={review.id} data={review}/>)
        }
      </ul>
      {
        authStatus === AuthStatus.Auth && <AddCommentForm onAddComment={onAddComment}/>
      }
    </section>
  );
}

export {ReviewsList};
