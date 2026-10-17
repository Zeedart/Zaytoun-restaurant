import { type SchemaTypeDefinition } from 'sanity'
import { menuItems } from './menuItems'
import { category } from './category'
import { localeString } from './localeString'
import { tag } from './tag'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [menuItems, category, localeString, tag],
}
