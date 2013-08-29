Daigo = {};

Daigo.Core = {
	log: function (userId, packageType, packageId) {
		// Log a user gamification update/action/whatever
		DaigoLogs.insert({
			userId: userId,
			packageType: packageType,
			packageId: packageId,
			createdAt: new Date().getTime()
		});
	},
	getUserLogs: function (userId, packageType) {
		// Get logs for userId, optionally only for package of packageType
		var search = { userId: userId };
		if (typeof packageType !== 'undefined')
			search.packageType = packageType;
		return DaigoLogs.find(search).fetch();
	}
};