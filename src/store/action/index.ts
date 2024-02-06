import * as UserActionCreators from './user'
import * as InquiriesActionCreators from './inquiries'
import * as ProductsActionCreators from './product'
import * as OrderActionCreators from './order'


export default {
    ...UserActionCreators,
    ...InquiriesActionCreators,
    ...ProductsActionCreators,
    ...OrderActionCreators
}