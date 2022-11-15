ej.QueryDesigner.Locale['en-AU'] = {
    storeParameter: {
        title: 'Parameters',
        ok: 'OK',
        cancel: 'Cancel',
        parameterLable: 'Parameter',
        nullLable: 'Null',
        valueLable: 'Value',
        dataTypeLable: 'DataType',
        closeToolTip: 'Close'
    },
    parameter: {
        title: 'Parameters',
        ok: 'OK',
        cancel: 'Cancel',
        parameterLable: 'Parameter',
        nullLable: 'Null',
        valueLable: 'Value',
        dataTypeLable: 'DataType',
        auto: 'Auto',
        text: 'Text',
        closeToolTip: 'Close'
    },
    filter: {
        title: 'Query Filters',
        descriptionLable: 'List of Table Filters',
        add: 'ADD',
        save: 'OK',
        cancel: 'Cancel',
        nullLable: 'Null',
        trueLable: 'True',
        falseLable: 'False',
        parameterTooltip: 'Include as Parameter',
        closeToolTip: 'Close',
        numberType: 'Number',
        stringType: 'String',
        intOperatorType: {
            equals: 'Equals',
            doesNotEqual: 'Does Not Equal',
            greaterThan: 'Greater Than',
            greaterThanOrEqual: 'Greater Than Or Equal To',
            lessThan: 'Less Than',
            lessThanOrEqual: 'Less Than Or Equal To',
            between: 'Between',
            notBetween: 'Not Between'
        },
        stringOpertorType: {
            equals: 'Equals',
            startsWith: 'Starts With',
            endWith: 'Ends With',
            contains: 'Contains',
            notContains: 'Not Contains'
        },
        errorMessage: {
            dateValidation: 'Value is an invalid date format.',
            commonContent: 'The filter on ',
            booleanValidation: ' does not have any values to filter on. Please provide the values for the filter.',
            stringValidation: ' does not have proper values to filter on. '
        }
    },
    previewArea: {
        dataPreview: 'Data Preview',
        noRecords: 'No records to display',
        generatePreview: 'Generate Preview',
        executeRecords: 'Execute to preview records',
        record: 'Record',
        records: 'Records',
        retrieved: 'Retrieved',
        loadRecord: 'Load More',
        update: 'Update',
        previewContainer: 'Data Preview Container'
    },
    schemaArea: {
        search: 'Search',
        matchesFound: 'No matches found',
        rename: 'Rename',
        searchInfo: 'Retrieves the matching information from currently fetched schema',
        aggregation: 'Aggregation',
        dialogHeader: 'Dataset',
        alertMessage: {
            datasourceAlert: 'Select a DataSource to Configure Report Dataset',
            removeTable: 'The below associated tables will remove with this',
            duplicateName: 'The specified column name already exists',
            duplicateDatasetName: 'The specified name already exists in Dataset list',
            datasetSpecialCharacter: 'Name should not contain spaces and special characters',
            specialCharacter: 'Column name should not contain special characters.',
            switcherAlert: 'Switching to the visual designer will discard  manual changes made to the query. Do you want to use the visual designer anyway?'
        },
        errorMessage: {
            specifyName: 'Specify the column name',
            specifyDatasetName: 'Specify the Dataset name',
            previewFailed: 'Dataset failed to preview the selected table',
            specifyQuery: 'Specify the Dataset query',
            selectTable: 'Select the table to save the Dataset',
            queryFailed: 'Dataset failed to save the Query of selected table',
            refreshFailed: 'Failed to refresh the dataset {datasetName}, it requires one or more input values. Please edit and save the dataset.',
            tableProcedure: 'Dataset failed to retrieve the selected table procedure',
            confirmPermission: 'Retrieved huge records, rendering will take time. Would you like to load anyway ?',
            deleteTableFailure: 'Failed to delete the selected table',
            joinTableFailure: 'Failed to join the selected tables'
        },
        dragSurface: 'Drag Surface Container',
        searchSchema: 'Search Schema',
        fieldTable: 'Field Table',
        closeFieldTable: 'Close Table',
        fieldSelection: 'Field Chooser',
        selectAndDeselectAll: 'Select and Deselect All Columns'
    },
    toolBar: {
        datasourceLable: 'DataSource',
        datasetName: 'Name',
        run: 'Run',
        join: 'Join',
        expression: 'Expression',
        filter: 'Filter',
        code: 'Code',
        finish: 'Finish',
        cancel: 'Cancel',
        datasourceWaterMark: 'Select a DataSource',
        parameter: 'Parameter',
        autoPreview: 'Auto Preview'
    },
    joiner: {
        title: 'Query Joiner',
        descriptionLable: 'List of Table Relations',
        add: 'ADD',
        save: 'OK',
        cancel: 'Cancel',
        closeToolTip: 'Close',
        addField: 'Add Field',
        leftTableWaterMark: 'Left Table',
        rightTableWaterMark: 'Right Table',
        leftFieldWaterMark: 'Left Field',
        rightFieldWaterMark: 'Right Field',
        operatorWaterMark: 'Operator',
        joinTypeWaterMark: 'Join Type',
        joinTypes: {
            inner: 'Inner',
            outer: 'Left Outer',
            rightOuter: 'Right Outer',
            fullOuter: 'Full Outer'
        },
        errorMessage: {
            removeField: 'Each relation must have one field condition. So, it does not allow deleting this field',
            noRelationAlert: ' is no relation with other tables',
            selectLeftTable: 'Select the left table value',
            selectRightTable: 'Select the right table value',
            selectRelation: 'Select the relation for tables',
            selectLeftColumn: 'Select the left column value of field row #',
            selectRightColumn: 'Select the right column value of field row #',
            selectOperator: 'Select the operator of field row #',
            relationExists: 'Already relation exists between tables',
            saveJoinerAlert: 'Failed to join the selected tables'
        }
    },
    credentialDialog: {
        title: 'Credential Dialog',
        userName: 'Username',
        password: 'Password',
        userNameErrorMessage: 'Please enter Username',
        passwordErrorMessage: 'Please enter Password',
        connect: 'Connect',
        close: 'Close',
        credentialLabel: 'Data Source Credentials'
    },
    queryExpression: {
        title: 'Query Expressions',
        functionLabel: 'Functions',
        columnLabel: 'Column Settings',
        expressionLabel: 'Expression',
        nameLabel: 'Name',
        descriptionLabel: 'Description ',
        exampleLabelText: 'Example',
        ok: 'Save',
        cancel: 'Cancel',
        add: 'Add',
        textAreaWaterMark: 'Query Expression',
        nameFieldWaterMark: 'Expression Name',
        closeToolTip: 'Close',
        errorMessage: {
            saveAlert: 'Expression is not saved. Do you want to save and continue?',
            bracketSyntax: 'Incorrect Syntax near open/close bracket(s).',
            parseAlert: 'ReportDesigner failed to parse the specified expression.',
            nameAlert: 'Name field should not be empty.',
            emptyAlert: 'Expression field should not be empty',
            duplicateName: 'The specified expression name already exists',
            specialCharacter: 'Expression name should not contain special characters.',
            referenceError: 'Column cannot be referred within its own expression!',
            invalidSyntax: 'Invalid syntax near open/close bracket(s).',
            retrieveExpression: 'ReportDesigner failed to retrieve the specified expression.',
        },
        datasetTitle: 'Dataset',
        expressions: {
            all: 'All',
            numbers: 'Numbers',
            logical: 'Logical',
            conditional: 'Conditional',
            date: 'Date',
            stringType: 'String',
            text: 'Text',
            miscellenuous: 'Miscellaneous ',
            abs: 'Returns the absolute value of the given expression.',
            acos: 'Returns the inverse cosine (also known as arccosine) of the given numeric expression.',
            asin: 'Returns the inverse sine (also known as arcsine) of the given numeric expression.',
            atan: 'Returns the inverse tangent (also known as arctangent) of the given numeric expression.',
            cos: 'Returns the cosine of the angle specified in radians of the given expression.',
            degree: 'Returns the angle in degrees for the one which specified in radians of the given numeric expression.',
            exponent: 'Returns the exponential value of the given expression.',
            logrithm: 'Returns the logarithm of the given expression to the specified base.',
            pi: 'Returns the constant value of PI.',
            power: 'Returns the value of the given expression (expression1) to the specified power (expression2).',
            radians: 'Returns the angle in radians for the one which specified in degrees in the given numeric expression.',
            round: 'Returns a rounded value.',
            sign: 'Returns a value representing the positive (+1), zero(0), or negative (-1) sign of the given numeric expression.',
            sin: 'Returns the sine of the angle specified in radians of the given expression.',
            squareRoot: 'Returns the square root of the given numeric expression.',
            tan: 'Returns the tangent of the given numeric expression.',
            ifCondition: 'Returns either true part or false part, depending upon the evaluation of the expression.',
            ifNull: 'If the expression is numeric/string/date, returns the first expression. If the first expression is NULL, returns the second expression.',
            isNotNull: 'If the numeric/ string / date_expression is NULL, returns a string representing false; otherwise represents true.',
            isNull: 'If the numeric/string/date_expression is NULL, returns a string representing true; otherwise represents false.',
            and: 'Returns true if both the expressions evaluate to true.',
            notOperation: 'Returns the reversal logical value of the expression being evaluated.',
            orOperation: 'Returns true if any of the expressions evaluates to true.',
            addDate: 'Adds the number of days to the specified date.',
            name: 'Returns a string representing the specified datepart of the given date expression.',
            part: 'Returns an integer value representing the specified date part of the given date expression.',
            sub: 'Returns the date subtracted from the specified date.',
            day: 'Returns a numeric value representing the day part of the specified date.',
            daydiff: 'Returns a numeric value representing the difference between two specified dates.',
            hour: 'Returns the hour of the given date as an integer.',
            minute: 'Returns a numeric value representing the minute part of the date resulting from specified date expression.',
            month: 'Returns a numeric value representing the month part of the date resulting from specified date expression.',
            now: 'Returns the current date and time.',
            today: 'Returns the current date.',
            year: 'Returns a numeric value representing the year part of the date resulting from the specified date expression.',
            char: 'Converts the given integer ASCII code into a character.',
            concat: 'Returns a string value resulting from the concatenation of two or more string values.',
            contains: 'Returns true if the given string expression contains the specified substring expression.',
            endsWith: 'Returns true if the given string expression ends with the specified substring expression.',
            left: 'Returns the specified number of characters from starting of the given string expression.',
            length: 'Returns the natural logarithm of the given expression.',
            lower: 'Returns a lower case converted string value from the given string expression.',
            leftTrim: 'Returns the string value with leading blanks removed from string expression.',
            maximum: 'Returns the maximum value in the given expression.',
            minimum: 'Returns the minimum value in the given expression.',
            right: 'Returns the specified number of characters from the end of the given string expression.',
            rightTrim: 'Returns the string without right side trailing spaces in the given string.',
            startswith: 'Returns true if the given string expressions starts with the specified substring expression.',
            subString: 'Returns a specific length of string starting from specific index of the given string expression.',
            upper: 'Returns an upper case converted string value from a given string expression.'
        }
    },
    alertMessage: {
        yes: 'Yes',
        no: 'No',
        ok: 'OK',
        showDetails: 'Show Details',
        hideDetails: 'Hide Details',
        close: 'Close'
    }
};
