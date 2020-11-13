import React,{useState} from 'react'
import ShopData from './shop.data'
import PreviewCollection from '../../components/preview-collection/PreviewCollection'

function Shop() {

    const [collections,setCollections] = useState(ShopData)
    return (
        
        <div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <PreviewCollection key={id} {...otherCollectionProps}/>
                ))
            }
        </div>
    )
}

export default Shop
