import { getRequest } from '@/hook/api'
import React from 'react'
import CategoryItemsInsight from './CategoryItemsInsight'

const CategoryInsight = async () => {
    let data = await getRequest("/product/list-category")
    console.log(data)
    let search = data?.data.map((element: any) => ({
        name: element.name,
        href: "?category=" + element.code,
        code: element.code
    }))
    search = [{ name: "All Category", href: "?category=", code: " " }, ...search]
    return (
        <CategoryItemsInsight category={search}/>
    )
}

export default CategoryInsight