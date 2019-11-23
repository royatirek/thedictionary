package in.timemac.dictionary.model;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;

@DynamoDBTable(tableName = "dictionary")
public class Word
{
    @DynamoDBHashKey(attributeName = "wordItem")
    private String wordItem;
    @DynamoDBAttribute(attributeName = "addSentences")
    private String addSentences;
    @DynamoDBAttribute(attributeName = "wordContent")
    private String wordContent;
    @DynamoDBAttribute(attributeName = "mnemonics")
    private String mnemonics;

    public Word(final String wordItem, final String addSentences, final String wordContent, final String mnemonics) {
        this.wordItem = wordItem;
        this.addSentences = addSentences;
        this.wordContent = wordContent;
        this.mnemonics = mnemonics;
    }

    public Word() {
    }

    public String getWordItem() {
        return this.wordItem;
    }

    public String getAddSentences() {
        return this.addSentences;
    }

    public String getWordContent() {
        return this.wordContent;
    }

    public String getMnemonics() {
        return this.mnemonics;
    }

    public void setWordItem(final String wordItem) {
        this.wordItem = wordItem;
    }

    public void setAddSentences(final String addSentences) {
        this.addSentences = addSentences;
    }

    public void setWordContent(final String wordContent) {
        this.wordContent = wordContent;
    }

    public void setMnemonics(final String mnemonics) {
        this.mnemonics = mnemonics;
    }
}