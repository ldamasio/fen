import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function slugify(string) {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

function Product({ product }) {
    var productLink = slugify(product.name);
    return(
      <Card className="my-3 p-3 rounded">
        <Link to={`${productLink}`}>
          <Card.Img src={product.image} />
        </Link>
          <Card.Body>
            <Link to={`${productLink}`}>
              {product.name}
            </Link>
            <br /><br />
            {product.description}
          </Card.Body>
      </Card>
    )
}

export default Product
