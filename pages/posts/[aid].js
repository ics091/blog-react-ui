import { useRouter } from 'next/router'
import Glolayout from '../../components/global_layout'
import '../../config/config.js'

const Post = () => {
  const router = useRouter()
  const { aid } = router.query
  console.log( aid )

  return(
    <Glolayout>
        <>
        </>
    </Glolayout>
    )
}

export default Post

// export async function getArticle ( id ) {
//     const res = await fetch('http://localhost:8080/article/' + id)
//     const json_data = await res.json()

//     return {
//         props: {
//             json_data,
//         },
//     }
// }