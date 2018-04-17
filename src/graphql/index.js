import { mergeSchemas } from 'graphql-tools'
import resolvers from './resolvers'
import * as schemas from './schemas'

export default mergeSchemas({ schemas: Object.values(schemas), resolvers })
