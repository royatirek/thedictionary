package in.timemac.dictionary.model;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;

@DynamoDBTable(tableName = "frequentWords")
public class FrequentWord
{
    @DynamoDBHashKey(attributeName = "word")
    private String word;

    public FrequentWord(final String word) {
        this.word = word;
    }

    public FrequentWord() {
    }

    public String getWord() {
        return this.word;
    }

    public void setWord(final String word) {
        this.word = word;
    }
}