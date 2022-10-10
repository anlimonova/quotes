import gulp from 'gulp';

import PATHS from '../paths';

export default function vendor() {
	return gulp.src(PATHS.src.vendor).pipe(gulp.dest(PATHS.build.vendor));
}
