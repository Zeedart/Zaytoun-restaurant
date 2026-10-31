import { type SchemaTypeDefinition } from 'sanity'
import { menuItems } from './menuItems'
import { category } from './category'
import { localeString } from './localeString'
import { homePage } from './homepage'
import { tag } from './tag'
import { localeText } from './localeText'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [menuItems, category, localeString, homePage, tag, localeText],
}
