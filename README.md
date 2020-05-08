# amplify-graphql-test

Testing out Amplify for building an SPA backed by a GraphQL API built with AppSync.

## Notes

### Loading user tenant

AppSync request resolvers for two functions in a pipeline resolver, where the first one loads the tenant from a users table given the access token user id, and the second one uses it to filter the query. 

```vtl
{
    "operation": "GetItem",
    "key": {
        "id": $util.dynamodb.toDynamoDBJson($ctx.identity.sub),
    }
}
```

```vtl
## [Start] Set query expression for @key **
#set( $modelQueryExpression = {} )

## Load tenantId from previous result
#set( $tenantId = $ctx.prev.result.tenantId )

## Use tenantId, and fail if not set
#if( !$util.isNull($tenantId) )
  #set( $modelQueryExpression.expression = "#tenantId = :tenantId" )
  #set( $modelQueryExpression.expressionNames = {
  "#tenantId": "tenantId"
} )
  #set( $modelQueryExpression.expressionValues = {
  ":tenantId": {
      "S": "$tenantId"
  }
} )
#else
	$util.unauthorized()
#end

## ...
```
