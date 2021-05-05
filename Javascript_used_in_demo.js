function( options ) {
 
  console.log(options);

/*
    // disable initial selection
    options.initialSelection = false;        

    // create 'features' object if it does not exist
    options.features = options.features || {};
    options.features.flashback = true;
    options.features.filter = true;

    options.defaultGridViewOptions = {
        resizeColumns: false,
        reorderColumns: false
        //contextMenu: myContextMenu
    }
*/

/* --- 2 ---
    options.initActions = function(actions){
      actions.add({
          name: "clearAllocation",
          label: "Clear allocation",
          icon: "fa fa-plus",
          iconBeforeLabel: "true",
          action: function() {
            let 
              ig$ = $(actions.context),
              interactiveGridView = ig$.interactiveGrid('getViews').grid,
              myModel = interactiveGridView.model,
              currentSelection = ig$.interactiveGrid('getSelectedRecords');
            
            for (let i=0; i<currentSelection.length; i++) {
              myModel.setValue(currentSelection[i], 'FTE_JAN', '');
              myModel.setValue(currentSelection[i], 'FTE_FEB', '');
              myModel.setValue(currentSelection[i], 'FTE_MAR', '');
              myModel.setValue(currentSelection[i], 'FTE_APR', '');
              myModel.setValue(currentSelection[i], 'FTE_MAY', '');
              myModel.setValue(currentSelection[i], 'FTE_JUN', '');
              myModel.setValue(currentSelection[i], 'FTE_JUL', '');
              myModel.setValue(currentSelection[i], 'FTE_AUG', '');
              myModel.setValue(currentSelection[i], 'FTE_SEP', '');
              myModel.setValue(currentSelection[i], 'FTE_OCT', '');
              myModel.setValue(currentSelection[i], 'FTE_NOV', '');
              myModel.setValue(currentSelection[i], 'FTE_DEC', '');
            }
          }
      });
    };
*/
        
    return options;
}



  var 
    myContextMenu = {
      iconType: 'fa',
      items: [
        { 
          type:"action", 
          icon:"fa-clone",
          label: "Duplicate", 
          action: function(pOptions, pElement) { alert("Duplicate"); } 
        },
        { 
          type:"action", 
          icon: "fa-calendar-user",
          label: "Duplicate w/o allocation", 
          action: function(pOptions, pElement) { alert("Duplicate w/o allocation"); } 
        },
        { 
          type:"action", 
          icon: "fa-eraser",
          label: "Clear allocation", 
          action: function(pOptions, pElement) { alert("Clear allocation"); } 
        }       
      ]
    };




  var 
    myContextMenu = {
      iconType: 'fa',
      items: [
        { 
          type:"action", 
          icon:"fa-clone",
          label: "Duplicate", 
          action: "selection-duplicate"
        },
        { 
          type:"action", 
          icon: "fa-calendar-user",            
          label: "Duplicate w/o allocation", 
          action: function(pOptions, pElement) { 
            // pOptions (options of menu widget)
            // pElement (element that focus would normally return to when the menu closes)
            console.log(pOptions);
            let 
              ig$ = $(pOptions.actionsContext.context),
              interactiveGridView = ig$.interactiveGrid('getViews').grid,
              myModel = interactiveGridView.model,  

              currentSelection = ig$.interactiveGrid('getSelectedRecords');

            for (let i=0; i<currentSelection.length; i++) {

              let newRecordToInsert = Object.assign({}, currentSelection[i]);

              // let's clear FTE values
              for (let j=9; j<currentSelection[i].length; j++){
                newRecordToInsert[j] = '';
              }
      
              // let's insert a new row below the current
              // model.insertNewRecord(pParentRecordopt, pAfterRecordopt, pNewRecordopt)
              myModel.insertNewRecord(null, currentSelection[i], newRecordToInsert)  ;            
            }
          } 
        },
        { 
          type:"action", 
          icon: "fa-eraser",          
          label: "Clear allocation", 
          action: "clearAllication"
        }         
      ]           
    };       