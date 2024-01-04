import {
  useQuery,
} from '@tanstack/react-query'

const useDummyData = () => {
  const { data } = useQuery({
    queryKey: ['dummyData'],
    queryFn: () => fetch('https://dummyjson.com/products/1').then(res => res.json())
  })

  return {
    data
  }
}

export default useDummyData
