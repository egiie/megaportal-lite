# Fixing Bug
## Bug 1 
**DataTable not updating after adding a new target through modal**
The cause of the error is that after finishing adding a target in the modal, there was no data mutation performed on the main target table. As a result, the data was not updated in the table.
Here is the video link of the result of fixing the issue where data was not updated after adding a target from the modal : https://www.awesomescreenshot.com/video/19334925?key=b44bc07b2c183060fcd3e5967d409e2a

## Bug 2 
**Duplication of data when clicking the sync target button**
The cause of the error is that during the useEffect of fetchTarget, there was an error in setting the state on target, resulting in the previously entered data causing data duplication.
***link video hasil fixing duplikasi data stelah klik tombol sync: https://www.awesomescreenshot.com/video/19335023?key=977fb70067bfd2bea64560b1f137c1a6***

This bug 2 also causes another issue, which is the pagination not working perfectly
***link video bug dari pagination : https://www.awesomescreenshot.com/video/19334882?key=7b8e67e768d2ffdfca8eaa2914087e34***
***link video fixing bug dari pagination : https://www.awesomescreenshot.com/video/19335179?key=cb18c5186753467c409c6fdbba90198a***



