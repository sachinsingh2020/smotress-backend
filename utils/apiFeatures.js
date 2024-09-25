class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    filter() {
        const queryCopy = { ...this.queryStr };

        // Remove unwanted fields like 'keyword', 'limit', 'page'
        const removeFields = ['keyword', 'limit', 'page'];
        removeFields.forEach(key => delete queryCopy[key]);

        // Apply case-insensitive regex matching for strings in query
        for (let key in queryCopy) {
            if (typeof queryCopy[key] === 'string') {
                queryCopy[key] = { $regex: queryCopy[key], $options: 'i' }; // 'i' makes the regex case-insensitive
            }
        }

        // Update the query using the modified queryCopy
        this.query = this.query.find(queryCopy);
        return this;
    }
}

export default ApiFeatures;
