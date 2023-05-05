import { comment } from 'postcss'
import { BiLike, BiDislike } from 'react-icons/bi'

const Comment = ({ name, uploaded, image, comment }) => {
  return (
    <>
      <div className='flex flex-row space-x-3'>
        <img src={image} alt='' className='w-10 h-10 rounded-full' />
        <div>
          <div className='flex items-center space-x-2'>
            <p className='text-sm font-medium text-white'>{name}</p>
            <p className='text-gray text-xs'>
              {new Date(uploaded?.toDate()).toString().slice(0, 15)}
            </p>
          </div>
          <p className="text-base py-2 text-white">{comment}</p>
          <div className="flex items-center space-x-2">
            <BiLike className='cursor-pointer text-white'/>
            <p className="text-sm px-2 text-gray">24</p>
            <BiDislike className='cursor-pointer text-white'/>
          <p className="text-sm text-white">Reply</p>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Comment
