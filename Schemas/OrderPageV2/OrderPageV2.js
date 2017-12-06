define("OrderPageV2", [], function() {
	return {
		// Название схемы объекта страницы редактирования.
		entitySchemaName: "Order",
		// Перечень добавляемых деталей страницы редактирования.
		details: /**SCHEMA_DETAILS*/{
			// Настройка детали [Курьерcкие службы].
			"UsrCourierServiceDetail": {
				// Название схемы детали.
				"schemaName": "UsrCourierServiceDetail",
				// Название схемы объекта детали.
				"entitySchemaName": "UsrCourierService",
				// Фильтрация отображения контактов только для текущего заказа.
				"filter": {
					// Колонка схемы объекта детали.
					"detailColumn": "UsrOrder",
					// Колонка схемы объекта раздела.
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		// Массив модификаций.
		diff: /**SCHEMA_DIFF*/[
			// Метаданные для добавления детали [Курьерские службы].
			{
				"operation": "insert",
				// Название детали.
				"name": "UsrCourierServiceDetail",
				"caption": "UsrCourierServiceDetail",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				// Контейнеры, в котором размещена деталь.
				// Деталь размещена на вкладке [Доставка].
				"parentName": "OrderDeliveryTab",
				"propertyName": "items",
				// Индекс в списке добавляемых элементов.
				"index": 3
			}
		]/**SCHEMA_DIFF*/
	};
});